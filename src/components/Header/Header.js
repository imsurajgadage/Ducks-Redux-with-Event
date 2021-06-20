  import React from 'react'
  import styles from './Header.module.css'

  class Header extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          date: new Date()
        };
      }
    
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }
    
      render() {
        return (
          
          <div className={styles.container}>
                      <div className={styles.logoDiv}>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzUEes5Cgh9JkF-oQ9w1uk8L1jolOHM26Brg&usqp=CAU" alt="Logo" className={styles.logo}/>
                      </div>
                      <div className={styles.timeDiv}>
                          <p className={styles.text}>Cureent Time is:</p>     
                          {this.state.date.toLocaleTimeString()}      
                      </div>
                  </div>
        );
      }
    }

    export default Header