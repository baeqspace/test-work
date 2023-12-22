export function Loader() {
    return (
        <div style={{position: 'fixed', inset: 0, background: 'rgba(100,100,100,0.5)', zIndex: 99999, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', fontSize: 24}}>
            <div className="loader" style={{width: 100, height: 100, background: 'transparent', border: '5px dashed blue', borderRadius: 100}}></div>
            Загрузка...
        </div>
    )
}