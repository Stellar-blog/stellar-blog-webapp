import { useRouter } from 'next/router'

import searchPosts from '../../api/searchPosts'
import Header from '../../components/CommonHeader'
import NavBar from '../../components/PrivateNav'
import Card from '../../components/Card'
import NoPosts from '../../components/NoPosts'
import Term from './Term'
import {
    DashboardMain,
    Center,
} from '../../styles'

function Search() { 
    const router = useRouter()
    let term = router.query.id
    if (typeof term === "string") {
        term = term.toLowerCase()
    }

    const {
        lists,
        isLoading,
    } = searchPosts(term)

    return (
        <>
            <Header />
            <DashboardMain>
                <NavBar />
                <Center type="dashboard">
                    <Term term={term} />
                    {
                        (!isLoading && lists.length === 0)
                        ? <NoPosts message={"No search results"} />
                        : lists.map((item) => <Card key={item.id} data={item} />)
                    }
                </Center>
            </DashboardMain>
        </>
    )
}

export default Search