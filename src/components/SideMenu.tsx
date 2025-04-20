const SideMenu = () => {
    return (
        <aside className="bg-bg-grey w-16 md:w-80 flex flex-col items-center p-8">
            <h1 className="text-5xl font-bold hidden md:block">echelon</h1>
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