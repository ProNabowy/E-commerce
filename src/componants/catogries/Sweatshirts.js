import { Fragment } from "react";

import Card from "../Card/Card";
const Sweatshirts = (props) =>
{
    const { check, data, gendar } = props;

    const firstSlider = data && data.slice(0, 4);
    const secondSlider = data && data.slice(4);



    return (
        <Fragment>
            {data && check &&
                firstSlider.map(each_jacket =>
                {
                    return (
                        <Fragment key={each_jacket.id}>
                            <Card gendar={gendar} card_data={each_jacket} />
                        </Fragment>
                    )
                })}
            {data && !check &&
                secondSlider.map(each_jacket =>
                {
                    return (
                        <Fragment key={each_jacket.id}>
                            <Card gendar={gendar} card_data={each_jacket} />
                        </Fragment>
                    )
                })}
        </Fragment>
    );
}

export default Sweatshirts;