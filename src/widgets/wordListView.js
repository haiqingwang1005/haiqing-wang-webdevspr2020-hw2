import React from "react";
import {Card, CardBody, CardTitle, ListGroup, ListGroupItem} from "reactstrap";

/**
 * The list view that show the candidate word list. It receives the list data from its parent.
 */
export default class WordListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: props.list
        };
    }

    renderListItems(array) {
        return array.map(item =>
            <ListGroupItem key={item}>
                {item}
            </ListGroupItem>
        );
    }

    render() {
        return (
            <Card>
                <CardTitle className={"text-center listTitle"}>Word List</CardTitle>
                <CardBody>
                    <ListGroup className={"text-center"}>
                        {this.renderListItems(this.state.list)}
                    </ListGroup>
                </CardBody>
            </Card>
        );
    }
}