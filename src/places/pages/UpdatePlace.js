import React from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";

import './PlaceForm.css';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'EMpire State Building',
        description: 'One of the most famous sky scraper in the world.',
        imageUrl: 'https://cdn.britannica.com/73/114973-050-2DC46083/Midtown-Manhattan-Empire-State-Building-New-York.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'EMpire State Building',
        description: 'One of the most famous sky scraper in the world.',
        imageUrl: 'https://cdn.britannica.com/73/114973-050-2DC46083/Midtown-Manhattan-Empire-State-Building-New-York.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u2'
    },
]

const UpdatePlace = props => {
    const placeId = useParams().placeId;
    const place = DUMMY_PLACES.find(place => place.id === placeId);

    const [formState, inputHandler] = useForm({
        title: {
            value: place.title,
            isValid: true
        },
        description: {
            value: place.description,
            isValid: true
        }
    }, true);

    const placeUpdateSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    }

    if (!place) {
        return (
            <div className="center">
                <h2>Could not find place!</h2>
            </div>
        )
    }

    return (
        <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title."
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
            />
            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description.(Min. 5 characters)"
                onInput={inputHandler}
                initialValue={formState.inputs.description.value}
                initialValid={formState.inputs.description.isValid}
            />
            <Button type="submit" disabled={!formState.isValid}>UPDATE PLACE</Button>
        </form>
    );
};

export default UpdatePlace;