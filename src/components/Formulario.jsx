export default function Formulario() {
    return (
        <>
            <div className="comunidad">
                <img src="/img/gamepad.svg" />
                <h1>Nuestra comunidad</h1>
                <p>Forma parte de la mejor comunidad de jugadores, donde podrás mantenerte al tanto de nuevos juegos, descuentos, promociones, próximos lanzamientos y torneos de diferentes juegos, con diferentes jugadores alrededor del mundo</p>
                <h2>Completa el formulario para ser parte de GameZone</h2>
            </div>
            <form action="nuestra-comunidad">
                <label htmlFor="">Nombre completo</label>
                <input type="texto" /><br />
                <label htmlFor="">Correo eléctronico</label>
                <input type="email" /><br />
                <label htmlFor="">Fecha de nacimiento</label>
                <input className="cumple" type="datetime-local" /><br />
                <label htmlFor="">País</label>
                <input type="text" name="pais" id="pais" list="paises"/>
                <datalist id="paises">
                <option value="España" />
                <option value="México" />
                <option value="Argentina" />
                <option value="Perú" />
                <option value="Colombia" />
                <option value="El Salvador" />
                <option value="Otro país" /> 
                </datalist><br />
                <button className="enviar_formulario">Enviar</button>
            </form>
        </>
    );
}