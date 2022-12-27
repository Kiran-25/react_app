import { IdleTimerProvider, useIdleTimerContext } from 'react-idle-timer'

const MesgFun =(props)=>{
    const idleTimer = useIdleTimerContext()
    const {fname, lname}=props;

    const onPrompt = () => {
        // Fire a Modal Prompt
        console.log('onPrompt')
      }
    
      const onIdle = () => {
        // Close Modal Prompt
        // Do some idle action like log out your user
      }
    
      const onActive = (event) => {
        // Close Modal Prompt
        // Do some active action
        console.log('onActive')
      }
    
      const onAction = (event) => {
        // Do something when a user triggers a watched event
      }


return <div>
    <p>Name : {props.fname} - {props.lname}</p>
    <p>Name Using Des : {fname} - {lname}</p>
    <IdleTimerProvider
      timeout={1000 * 1}
      onPrompt={onPrompt}
      onIdle={onIdle} 
      onActive={onActive}
      onAction={onAction}
    ></IdleTimerProvider>
</div>
}

export default MesgFun;

 