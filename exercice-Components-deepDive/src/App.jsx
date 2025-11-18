import { useState } from "react"
import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import UserDetailsModal from "./components/overlays/UserDetailsModal"
import Pagination from "./components/Pagination"
import Search from "./components/userTable/Search"
import TableData from "./components/userTable/TableData"

function App() {

    const [showActiveModal, setShowActiveModal] = useState(null);


    const showActiveModalHandler = (modal) => {
        switch (modal) {
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

    return (
        <>
            <Header />
            <main className="main">
                <section className="card users-container">

                    <Search />

                    <TableData showActiveModalHandler={showActiveModalHandler} />

                    <button className="btn-add btn">Add new user</button>
                    <Pagination />
                </section>

                {showActiveModal === 'details' && <UserDetailsModal />}

            </main>

            <Footer />
        </>
    )
}

export default App
