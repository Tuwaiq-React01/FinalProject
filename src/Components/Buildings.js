import React from 'react'
import BuildingsData from '../BuildingsData';

export default function Buildings() {
    const buildings = BuildingsData;
    const buildingsList =
        buildings.map((e) => {
            return <div className="card">
                <div className="card-img">
                    <img src={e.image} style={{ width: "520px", height: "300px" }} alt={e.name} />
                </div>
                <div className="card-body">
                    <div className="card-title">
                        <h5 className="fst-italic text-center">
                            Available Rooms:
                            <br />
                            <strong>6 room(s)</strong>
                        </h5>
                        <br />
                        <p className="card-text">
                            <h4>{e.description}</h4>
                            <br />
                        </p>
                    </div>
                </div>
            </div>
        })

    return (
        <div>
            <main id="main">
                <div className="breadcrumbs">
                    <div className="container">
                        <h2>Buildings</h2>
                        <h3>Here are all the available buildings that house study rooms. You can view all the rooms available in a building from the building's detailed page.</h3>
                    </div>
                </div>
                <section id="events" className="events">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-stretch">
                                {buildingsList}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
