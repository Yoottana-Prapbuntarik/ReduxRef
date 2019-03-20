// import React, { Component } from 'react';
// // import PropTypes from 'prop-types';
// import { compose } from 'recompose';
// import { connect } from 'react-redux';

// class CaboGroup extends Component {
 

//     componentWillMount() {
//         const axios = require('axios');
//         axios.get('http://localhost:3030/api/cabogroups')
//           .then((response)=> {
//             this.props.dispatch({
//                 type:"updateValue",
//                 name:'cabogroup',
//                 value :response.data
//               });
//            // handle success
//           })
//           .catch(function (error) {
//             // handle error
//             console.log(error);
//           })
//           .then(function () {
//             });
//         }

//     render() {
//         return (
//             <div>
//                 <table border="1px" style={{margin :'20px'}}>
//                 <tbody>
//                     <tr>
//                     <td>ID CODE</td>  
//                     <td>NAME</td>  
//                     </tr>

//             {this.props.opdData.cabogroup.map((item, i)=>(
                
//                 <tr key={i}>
//                 <td>
//                 {item.cabogroup_code}
//                 </td>
//                 <td key={i}>
//                 {item.cabogroup_name}
//                 </td>
                
//                 </tr>
                
                
//             ))}
//             </tbody>
//                 </table>
            
//             </div>
//         );
//     }
// }


// const mapStateToProps = (state) =>({
//     opdData : state
// })

// export default compose(connect(mapStateToProps))  (CaboGroup);