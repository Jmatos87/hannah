import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import Celebration from './Celebration.js'

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days,hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Celebration/>;
  } else {
    // Render a countdown
    return (
    	<div>
			<ul style={{textAlign:'center'}}>
			    <li><span id="days">{days}</span>days</li>
			    <li><span id="hours">{hours}</span>hours</li>
			    <li><span id="minutes">{minutes}</span>minutes</li>
			    <li><span id="seconds">{seconds}</span>seconds</li>
		  	</ul>
		  	<div className='gifContainer'>
		  	<img className='gifs' 
		  		src='https://media.giphy.com/media/tXL4FHPSnVJ0A/source.gif' />
		  	<img className='gifs'
		  		src='https://media.giphy.com/media/ZXKZWB13D6gFO/giphy.gif' />
		  	</div>
		  	<div className='gifContainer'>
	  		<img className='gifs' 
	  			src='https://media.giphy.com/media/hCiQVo1dzVwPu/giphy.gif' />
	  		<img className='gifs' 
	  			src='https://media.giphy.com/media/26his5i9YJTqsqCyY/giphy.gif' />
		  	</div>
		  	<div className='gifContainer'>
	  		<img className='gifs'
	  			src='https://media.giphy.com/media/9EuG8bg3yzhzq/giphy.gif'/>
	  		<img className='gifs' 
	  			src='https://media.giphy.com/media/26gJAM2txqVLpXBm0/giphy.gif' />
		  	</div>
		  	<div className='quoteContainer' id='q1'>
		  		<span>
		  			<i>"For love would be love of the wrong thing; there is yet faith, 
		  			But the faith and the love and the hope are all in the waiting."</i> 
		  			<br/>― 
		  			<b>T.S. Eliot</b>
		  		</span>
	  		</div>
	  		<div className='quoteContainer' id='q6'>
		  		<span>
		  			<i>"Love is patient, love is kind. 
		  			It does not envy, it does not boast, it is not proud. 
		  			It does not dishonor others, it is not self-seeking, 
		  			it is not easily angered, it keeps no record of wrongs. 
		  			Love does not delight in evil but rejoices with the truth. 
		  			It always protects, always trusts, always hopes, always perseveres.
					Love never fails. But where there are prophecies, 
					they will cease; where there are tongues, they will be stilled; 
					where there is knowledge, it will pass away."</i> 
		  			<br/>― 
		  			<b>1 Corinthians 13:4-8</b>
		  		</span>
	  		</div>
	  		<div className='quoteContainer' id='q5'>
		  		<span>
		  			<i>"Patience, he thought. So much of this was patience 
		  			- waiting, and thinking and doing things right. 
		  			So much of all this, 
		  			so much of all living was patience and thinking."</i> 
		  			<br/>― 
		  			<b>Gary Paulsen</b>
		  		</span>
	  		</div>
	  		<div className='quoteContainer' id='q2'>
		  		<span>
		  			<i>“I might have to wait, I'll never give up
		  			<br/>
					I guess it's half timing and the other half's luck
					<br/>
					Wherever you are, whenever it's right
					<br/>
					You'll come out of nowhere and into my life.” </i> 
		  			<br/>― 
		  			<b>Michael Buble</b>
		  		</span>
	  		</div>
	  		<div className='quoteContainer' id='q3'>
		  		<span>
		  			<i>"How we need another soul to cling to, 
		  			another body to keep us warm. To rest and trust; 
		  			to give your soul in confidence: I need this, 
		  			I need someone to pour myself into."</i> 
		  			<br/>― 
		  			<b>Sylvia Plath</b>
		  		</span>
	  		</div>
	  		
	  		
	  		<div className='quoteContainer' id='q4'>
		  		<span>
		  			<i>"I have died everyday waiting for you. 
		  			Darling don't be afraid. I have loved you for a thousand years. 
		  			I'll love you a thousand more."</i> 
		  			<br/>― 
		  			<b>Christina Perri</b>
		  		</span>
	  		</div>
	  	</div>

  );
  }
};

class CountdownContainer extends Component {
  render() {
    return (
     
        <Countdown
		    date={1527772500000}
		    renderer={renderer}
		  />
    );
  }
}

export default CountdownContainer;