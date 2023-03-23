import React,{useEffect,useState} from 'react'
function Mapa(){
    return(
        <div>
             <section id="mapa" className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 intro-text">
                            <h1>Markets</h1>
                            <p>These are the supermarkets closest to you.</p>
                        </div>
                    </div>
                </div>
            </section>
            <script src="./scriptMapa.js"></script>
        
        </div>
        
    )
}
export default Mapa
