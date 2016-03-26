export default function NETWORK(){
  return {
    types : ['NETWORK_REQUEST', 'NETWORK_SUCCESS', 'NETWORK_FAILURE'],
    promise : () => {
      return new Promise((resolve, reject) => {

        // Testing NETWORK REQUEST CALL

        Promise.delay().then(() => {
          resolve({status : true});
        }).catch((error) => {
          reject(error);
        });


      });
    }
  }
}
