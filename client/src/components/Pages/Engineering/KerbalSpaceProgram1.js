import React from 'react';
import Subject from './../../Subject/Subject'
import { Body,Header, Video} from '../../Subject/SubjectStyles';
import TextQuestion from '../../Subject/Quiz';
import Button from '../../Subject/Button';


class LegoMindstorms1 extends React.Component  {
    
    

    render() {
        return (
            <Subject
                title = "Kerbal Space Program"
                urlName = "kerbalspaceprogram1"
            >
            {[
                <Body key title = "Launch a rocket">
                    <Header>Up up up!</Header>
                    <p>Build a rocket. Go up. Come back alive</p>
                    <Header>Resources</Header>
                    <Video src = 'https://youtube.com/embed/bpw-bBJIZr4'/>
                    <Button changeScoreValue = {2}>I made it!</Button>
                </Body>,

                <Body key title = "Launch a rocket into space">
                    <Header>Get to space</Header>
                    <p>Get to at least 70,000 meters. Come back alive.</p>
                    <Header>Resources</Header>
                    <Video src = 'https://youtube.com/embed/bpw-bBJIZr4'/>
                    <Button>I made it!</Button>
                </Body>,
                
                <Body key title = "Orbit">
                    <Header>Orbit Kerbin</Header>
                    <p>Do a couple orbits of Kerban. Come back alive</p>
                    <Header>Resources</Header>
                    <Video src = 'https://youtube.com/embed/bpw-bBJIZr4'/>p
                    <p>Steps:</p>
                    <p>1. Get to 10,000 meters</p>
                    <p>2. Turn unil you're about halfway to 90 degrees.</p>
                    <p>3. Check you map with the M button. Once your apoapsis hits 100,000 meters, cut the engines</p>
                    <p>4. Add a maneuver that casuses your peroapis to be around 100,000 meters.</p>
                    <p>5. Select the maneuver autopilot on the left of the navball</p>
                    <p>6. Once the time until the maneuver is half the time of the actual maneuver, turn the throttle all the way up</p>
                    <p>7. Once you get your desired orbit, cut the engines.
                    <p>8. To get back down, burn retrograde until your peroapis is in the ocean.</p> 
                    <Button badge = 'one_star' changeScoreValue = {10}>I made it!</Button>
                </Body>,

                <Body key title = "Spacewalk">
                    <Header>Part 1:</Header>
                    <p>Make your apoapsis within 1000 meters of each other.</p>
                    <Header>Part 2:</Header>
                    <p>Go on a spacewalk. Get 50 meters away from the spaceship and come back</p>
                    <Button>Done</Button>
                </Body>,
                
                <Body key title = "Crash into the moon">
                    <Header>Crash into the moon.</Header>
                    <p>Yep. Crash into the moon. You don't need to come back alive.</p>
                    <Button badge = 'two_star'>Done</Button>
                </Body>,

                <Body key title = "Orbit the moon.">
                    <Header>Orbit the moon</Header>
                    <p>Orbit the moon. Come back alive</p>
                    <Button>Done</Button>
                </Body>,

                <Body key title = "Land on the moon.">
                    <Header>Land on the moon</Header>
                    <p>Land on the moon. You don't need to come back alive.</p>
                    <Button badge = 'three_star'>Done</Button>
                </Body>,

                <Body key title = "Come back from the moon">
                    <Header>Come back from the moon.</Header>
                    <p>Land on the moon. Then come back alive</p>
                    <Button badge = 'space_cowboy' changeScoreValue = {15}>Done</Button>
                </Body>,
                

                

            ]}

            </Subject>


        )
    }

}

export default LegoMindstorms1;