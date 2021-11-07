fetch('\'/v1/currencies\'')
    .then(function (resp){
        return resp.text();
    })
    .then(function (data) {
        console.log(data);
    })
// import React from 'react';
//
// class Service extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             allStuff: null
//         };
//     }
//
//     componentDidMount() {
//         fetch('/v1/currencies')
//             .then(response => console.log(response))
//             .then(data => console.log(data))
//             // .then(response => response.xml())
//             // .then(data => this.setState({ allStuff: data.total }));
//
//     }
//
//     render() {
//         const { allStuff } = this.state;
//         return (
//             <div className="card text-center m-3">
//                 <div className="card-body">
//                     Show me something plz: {allStuff}
//                 </div>
//             </div>
//         );
//     }
// }
//
// export { Service };