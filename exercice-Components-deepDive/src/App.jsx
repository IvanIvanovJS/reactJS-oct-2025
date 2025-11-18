import { useState } from "react"
import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import UserDetailsModal from "./components/overlays/UserDetailsModal"
import Pagination from "./components/Pagination"
import Search from "./components/userTable/Search"
import TableData from "./components/userTable/TableData"
import UserManageModal from "./components/overlays/UserManageModal"
import UserDeleteModal from "./components/overlays/UserDeleteModal"

function App() {

    const [showActiveModal, setShowActiveModal] = useState(null);
    const [forceRefresh, setForceRefresh] = useState(false)
    const [user, setUser] = useState(null)
    const [userId, setUserId] = useState(null)

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
    const fetchUserById = async (userId) => {
        try {
            const res = await fetch(`http://localhost:3030/jsonstore/users/${userId}`)
            const result = await res.json()
            setUser(result)

        } catch (err) {
            alert(err.message)
        }
    }



    const onEditClick = async (userId) => {
        await fetchUserById(userId)
        setShowActiveModal('edit');

    }
    const onEditUserHandler = (e, user) => {
        e.preventDefault()
        try {
            const formData = new FormData(e.target)
            const entries = Object.fromEntries(formData)
            const updatedUser = {
                ...user,
                ...entries,
                address: {
                    ...user.address,
                    country: entries.country,
                    city: entries.city,
                    street: entries.street,
                    streetNumber: entries.streetNumber,
                },
                updatedAt: new Date().toISOString(),
            };

            fetch(`http://localhost:3030/jsonstore/users/${user._id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedUser)
            })
            refreshTable()
            setShowActiveModal(null)
        } catch (err) {
            alert(err.message)
        }

    }

    const onDetailsClick = async (userId) => {
        await fetchUserById(userId)
        setShowActiveModal('details');

    }
    const onDeleteHandler = (userId) => {
        setShowActiveModal('delete')
        setUserId(userId)
    }
    const deleteUserHandler = async (userId) => {
        try {

            await fetch(`http://localhost:3030/jsonstore/users/${userId}`, {
                method: 'DELETE'
            })
            setShowActiveModal(null)
            refreshTable()
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
                        forceRefresh={forceRefresh}
                        onDetailsClick={onDetailsClick}
                        onDeleteHandler={onDeleteHandler}
                        onEditClick={onEditClick}
                    />

                    <button className="btn-add btn" onClick={() => showActiveModalHandler('create')}>Add new user</button>

                    <Pagination />

                </section>

                {['create', 'edit'].includes(showActiveModal) && <UserManageModal
                    showActiveModalHandler={showActiveModalHandler}
                    onSubmit={addSubmitUserHandler}
                    onEdit={onEditUserHandler}
                    showActiveModal={showActiveModal}
                    user={user}
                />}
                {showActiveModal === 'details' && <UserDetailsModal
                    showActiveModalHandler={showActiveModalHandler}
                    user={user}
                />}

                {showActiveModal === 'delete' && <UserDeleteModal
                    showActiveModalHandler={showActiveModalHandler}
                    deleteUserHandler={deleteUserHandler}
                    userId={userId}
                />}

            </main>

            <Footer />
        </>
    )
}

export default App
