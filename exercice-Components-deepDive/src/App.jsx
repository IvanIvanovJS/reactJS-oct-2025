import { useState } from "react"
import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import UserDetailsModal from "./components/overlays/UserDetailsModal"
import Pagination from "./components/Pagination"
import Search from "./components/userTable/Search"
import TableData from "./components/userTable/TableData"
import UserManageModal from "./components/overlays/UserManageModal"

function App() {

    const [showActiveModal, setShowActiveModal] = useState(null);
    const [forceRefresh, setForceRefresh] = useState(false)
    const [user, setUser] = useState(null)

    const showActiveModalHandler = (modal) => {
        switch (modal) {
            case 'create':
                setShowActiveModal('create')
                break;
            case 'details':
                setShowActiveModal('details')
                break;
            case 'delete':
                setShowActiveModal('delete')
                break;
            case 'edit':
                setShowActiveModal('edit')
                break;

            default:
                setShowActiveModal(null)
                break;
        }
    }
    const refreshTable = () => {
        setForceRefresh(state => !state)
    }


    const addSubmitUserHandler = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const { country, city, street, streetNumber, ...userData } = Object.fromEntries(formData)
        userData.address = {
            country,
            city,
            street,
            streetNumber,
        }
        userData.createdAt = new Date().toISOString()
        userData.updatedAt = new Date().toISOString()

        fetch('http://localhost:3030/jsonstore/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        refreshTable()
        setShowActiveModal(null)
    }

    const onDetailsClick = async (userId) => {

        try {
            const res = await fetch(`http://localhost:3030/jsonstore/users/${userId}`)
            const result = await res.json()
            setUser(result)
            setShowActiveModal('details');
        } catch (err) {
            alert(err.message)
        }

    }


    return (
        <>
            <Header />

            <main className="main">
                <section className="card users-container">

                    <Search />

                    <TableData
                        showActiveModalHandler={showActiveModalHandler}
                        forceRefresh={forceRefresh}
                        onDetailsClick={onDetailsClick}
                    />

                    <button className="btn-add btn" onClick={() => showActiveModalHandler('create')}>Add new user</button>

                    <Pagination />

                </section>

                {showActiveModal === 'create' && <UserManageModal
                    showActiveModalHandler={showActiveModalHandler}
                    onSubmit={addSubmitUserHandler}
                />}
                {showActiveModal === 'details' && <UserDetailsModal
                    showActiveModalHandler={showActiveModalHandler}
                    user={user}
                />}

            </main>

            <Footer />
        </>
    )
}

export default App
