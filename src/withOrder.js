import React from 'react'



export default Wrap => props => {
    

    function connect(){
       console.log('====================================');
       console.log("onChange");
       console.log('====================================');
    }

    connect()

    return (
        <div>
            <p>HOC</p>
            <Wrap {...props} />
        </div>
    )

}

   






