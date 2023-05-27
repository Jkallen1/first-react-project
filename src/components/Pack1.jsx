import React from "react";
import Package from "./newpack";

function PackageItem(props) {
    return (
        <section className="packages">
            <h3 className="title">Tour Packages</h3>
            <p>We offer a variety of group (minimum 5 people) packages. Whether you've spent some summers together or this might be your first adventure, we've got the perfect vacation for you.</p>
            <hr />

            <ul className="grid">
                <Package
                    icon="fa fa-compass fa-4x"
                    title="Guided Trips"
                    description="Looking for the complete experience? Take a tour with one of our experts. They'll show you secrets that you're likely to miss otherwise."
                />
                <Package
                    icon="fa fa-camera-retro fa-4x"
                    title="Photo Trips"
                    description="Want to experience nature's beauty without all of that annoying exercise? Take a photo tour on one of our 'Life is a party!' buses."
                />
                <Package
                    icon="fa fa-bicycle fa-4x"
                    title="Biking Trips"
                    description="If bicycles are more your speed, consider taking a tour through one of our mountain or city bike paths. We'll provide the bikes, and lunch too!"
                />
                <Package
                    icon="fa fa-flag-checkered fa-4x"
                    title="Racing Trips"
                    description="Got a competitive spirit? Sign up for one of our challenge-based marathons! Try to reach the summit before any other group."
                />
            </ul>
        </section>
    );
}



export default PackageItem;