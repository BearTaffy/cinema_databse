function home() {

    return (
        <div className="bg-white flex flex-col px-16 py-12 max-md:px-5">
            <div className="text-black text-xl">
                <a href="/reserve">
                reserve a new seat
                </a>
            </div>
            <div className="text-black text-xl mt-14 max-md:mt-10">
                delete a reservation
            </div>
        </div>
    )
}

export default home
