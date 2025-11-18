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

    const addSubmitUserHandler = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const userData = Object.fromEntries(formData)

        setShowActiveModal(null)
    }

    return (
        <>
            <Header />
            <main className="main">
                <section className="card users-container">

                    <Search />

                    <TableData showActiveModalHandler={showActiveModalHandler} />

                    <button className="btn-add btn" onClick={() => showActiveModalHandler('create')}>Add new user</button>
                    <Pagination />
                </section>

                {showActiveModal === 'create' && <UserManageModal
                    showActiveModalHandler={showActiveModalHandler}
                    onSubmit={addSubmitUserHandler}
                />}
                {showActiveModal === 'details' && <UserDetailsModal showActiveModalHandler={showActiveModalHandler} />}

            </main>

            <Footer />
        </>
    )
}

export default App
