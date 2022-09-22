import * as React from 'react'
import Header from './Header';
import Footer from './Footer';
// import styles from './styles/main.module.css'

type Props = {
    children: JSX.Element
} 


function Layout({ children }: Props) {
    return (
        <React.Fragment>
            {/* <div className={styles.container}> */}
                {/* <div className={styles.inner_container}> */}
                    <Header/>
                    {children}
                    <Footer/>

                {/* </div> */}
            {/* </div> */}
        </React.Fragment>
    )
}

export default Layout;
