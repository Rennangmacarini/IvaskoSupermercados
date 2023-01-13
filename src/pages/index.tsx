import { Banner } from "../components/Banner"
import { ContentOne } from "../components/ContentOne"
import { ContentThree } from "../components/ContentTwo"
import { ContentTwo } from "../components/ContentThree"
import { Video } from "../components/filme"
import { Footer } from "../components/footer"
import { Header } from "../components/Header"


export default function Home(){
  return(
    <> 
    <Header/>
    <Banner />
    <ContentOne />
    <ContentThree/>
    <ContentTwo/>
    <Video/>
    <Footer/>
    </>
  )
}