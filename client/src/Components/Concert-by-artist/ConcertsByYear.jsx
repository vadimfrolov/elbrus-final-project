import React, { Component } from "react";
import {  Link } from "react-router-dom";

import { connect } from "react-redux";
let moment = require("moment");

class ConcertsByYear extends Component {
  render() {
  
    return (
    
        <>
          {this.props.concerts.events &&
            this.props.concerts.events.map((event, i) => {
              return (
                <div key={i}>
                  <Link to={`/concert/${event.id}`}>
                    <div>{moment(event.start.date).format("ll")}</div>
                  </Link>
                  <div>{this.props.nameArtist}</div>
                  <div>{event.location.city}</div>
                  <div>-------------</div>
                </div>
              );
            })}
        </>
  
    );
  }
}


function mapStateToProps(store) {
  return {
    concerts: store.concerts
  };
}

export default connect(mapStateToProps)(ConcertsByYear);
