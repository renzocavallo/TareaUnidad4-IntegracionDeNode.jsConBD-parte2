import React from "react";
import "../styles/components/pages/NosotrosPage.css";

const NosotrosPage = (props) =>{
    return(
    <main className="holder">
    <div className="historia">
    <h2>Historia</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Sit fugit, temporibus laborum eos nesciunt unde harum ratione voluptatum explicabo officiis totam,
    optio cumque recusandae vel expedita consequatur labore minima in.
    </p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Nobis esse omnis vel fugit quis! Sunt maiores obcaecati nihil recusandae,
    accusamus rem dolorum voluptatem fugit voluptas harum, corrupti quisquam. Officia, eos.
    </p>
    </div>
    <div className="staff">
    <h2>Staff</h2>
    <div className="personas">
    <div className="persona">
    <img src="images/nosotros/nosotros1.jpg" alt="Marcelo Carrasco" />
    <h5>Marcelo Carrasco</h5>
    <h6>Gerente General</h6>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Dolorem repellendus nam corporis optio laudantium harum.
    Doloremque praesentium id expedita tenetur. Sed suscipit explicabo fugiat aliquam,
    est perferendis voluptatem reiciendis dolor.
    </p>
    </div>
    <div className="persona">
    <img src="images/nosotros/nosotros2.jpg" alt="Florencia Cavallo" />
    <h5>Florencia Cavallo</h5>
    <h6>Gerente Comercial</h6>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Dolorem repellendus nam corporis optio laudantium harum.
    Doloremque praesentium id expedita tenetur. Sed suscipit explicabo fugiat aliquam,
    est perferendis voluptatem reiciendis dolor.
    </p>
    </div>
    <div className="persona">
    <img src="images/nosotros/nosotros4.jpg" alt="Leila Cavallo" />
    <h5>Leila Cavallo</h5>
    <h6>Gerente de Sistemas</h6>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Dolorem repellendus nam corporis optio laudantium harum.
    Doloremque praesentium id expedita tenetur. Sed suscipit explicabo fugiat aliquam,
    est perferendis voluptatem reiciendis dolor.
    </p>
    </div>
    <div className="persona">
    <img src="images/nosotros/nosotros3.jpg" alt="Francisco Toniello" />
    <h5>Francisco Toniello</h5>
    <h6>Gerente de Marketing</h6>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Dolorem repellendus nam corporis optio laudantium harum.
    Doloremque praesentium id expedita tenetur. Sed suscipit explicabo fugiat aliquam,
    est perferendis voluptatem reiciendis dolor.
    </p>
    </div>
    <div className="persona">
    <img src="images/nosotros/nosotros5.jpg" alt="Leandro Lanza" />
    <h5>Leandro Lanza</h5>
    <h6>Gerente Logistica</h6>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Dolorem repellendus nam corporis optio laudantium harum.
    Doloremque praesentium id expedita tenetur. Sed suscipit explicabo fugiat aliquam,
    est perferendis voluptatem reiciendis dolor.
    </p>
    </div>
    </div>
    </div>
    </main>
    );
}

export default NosotrosPage;