import React from 'react'

class Home extends React.Component {

    render () {
        return(
            <section className="intro">
            <header>
                <h1>Shaz Cafe</h1>
                <p>Best refined coffee in town <a href="https://twitter.com/ajlkn"></a><a href="https://html5up.net"></a></p>
                <ul className="actions">
                    <li><a href="#first" className="arrow scrolly"><span className="label">Next</span></a></li>
                </ul>
            </header>
            <div className="content">
                <span className="image fill" data-position="center"><img src="https://images.unsplash.com/photo-1534234757579-8ad69d218ad4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" /></span>
            </div>
        </section>
        )
    }
}



export default Home