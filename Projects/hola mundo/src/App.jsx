import './App.css';
export function App () {
    return (
        <article className='tw-followCard'>
            <header>
                <img src="https://unavatar.io/sindresorhus@gmail.com" alt="Avatar De Prueba" />
                <div>
                    <strong>Jhon Cadavid</strong>
                    <span>@jhoncdeveloper</span>
                </div>
            </header>

            <aside>
                <button>
                    Seguir
                </button>
            </aside>

        </article>
    )
}