import Head from '../head/head'

const Navbar = () => (
    <div className="navbar">
        <Head title="Navbar" />
        <h1 ><i id='wheel' className="material-icons">clear</i></h1>
        <h1 id='title-wind'>RotorWind GmbH</h1>
        <em>"Uns bewegt nicht nur der Wind"</em>
        <a id="echtzeit" className="menu-item" href="/"><i class="material-icons">update</i> Echtzeitansicht</a>
        <a id="analyse" className="menu-item" href="/analyse"><i class="material-icons">timeline</i> Analyseansicht</a>
        <style jsx>{`
            .navbar {
                background: #373a47;
                width: 300px;
                justify-text: center;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            h1 {
                color: white;
            }

            em {
                color: white;
                margin-bottom: 50px;
                display: block;
            }

            #title-wind {
                font-family: 'Audiowide';
                font-size: 40px;
            }

            .menu-item {
                padding: 10px;
                margin: 2px;
                opacity: 0, 5;
                transition: 0.3s;
                display: block;
                width: 150px;
            }

            /* unvisited link */
            .menu-item:link {
                color: #b8b7ad;
                text-decoration: none;
            }

            /* visited link */
            .menu-item:visited {
                color: #b8b7ad;
                text-decoration: none;
            }

            /* mouse over link */
            .menu-item:hover {
                color: white;
                background: #00acc1;
                border-radius: 5px;
                opacity: 1;
                transform: scale(1.1);
            }

            #wheel {
                animation: roll 3s infinite;
                transform: rotate(30deg);
                font-size: 120px;
            }

            @keyframes roll {
                0% {
                    transform: rotate(0);
                }

                100% {
                    transform: rotate(360deg);
                }
        `}</style>
    </div>
)

export default Navbar