export default function Header() {
    return (
        <>
            <header>
                <div className="redes">
                    <div className="facebook">
                        <img src="/img/facebook.svg" />
                    </div>
                    <div className="instagram">
                        <img src="/img/instagram.svg" />
                    </div>
                    <div className="twitter">
                        <img src="/img/twitter.svg" />
                    </div>
                    <div className="youtube">
                        <img src="/img/youtube.svg" />
                    </div>
                </div>
                <div className="bienvenida">
                    <p>Bienvenido a GameZone, tu zona de diversión, donde encontraras los mejores juegos para tus consolas favoritas.</p>
                </div>
                <div className="perfil">
                    <div className="iniciar_sesion">
                        <button>
                            <img src="/img/user.svg" />
                            <p>Iniciar sesión</p>
                        </button>
                    </div>
                    <div className="registro">
                        <button>
                            <img src="/img/new-user.svg" />
                            <p>Registrarse</p>
                        </button>
                    </div>
                </div>
                <div className="btn_back">
                    <img src="/img/btn-back.svg" />
                </div>
            </header>
        </>
    );
}