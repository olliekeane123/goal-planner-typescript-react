const SideMenu = () => {
    return (
        <aside className="bg-bg-grey w-16 md:w-80 flex flex-col items-center p-8">
            <div id="logo" className="relative w-48 text-center">
                <h1 className="text-5xl font-logo hidden md:block bottom-0.5 relative z-100">echelon</h1>
                <div className=" h-4 w-48 bg-accent-green absolute bottom-0 z-0"></div>
            </div>
            <section>
                <h3>Tasks</h3>
                <ul>
                    <li className="flex">
                        <div className="bg-bg-primary w-4 h-4 rounded-full"></div>
                        <p>Upcoming</p>
                    </li>
                    <li>
                        <div></div>
                        <p>Today</p>
                    </li>
                    <li>
                        <div></div>
                        <p>Calendar</p>
                    </li>
                </ul>
            </section>
        </aside>
    )
}

export default SideMenu