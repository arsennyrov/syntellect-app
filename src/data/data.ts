import control from '../UI/TextControl/store';
import { myButton } from '../models';

export const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum molestiae delectus culpa hic assumenda, voluptate reprehenderit dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit, eveniet ex deserunt fuga?'
control.putText(text)

export const buttonsRight: myButton[] = 
  [
    {
      side: 'R', 
      title: 'Clear', 
      callBack: () => {control.putText('')}
    },
    
    {
      side: 'R', 
      title: 'Hello', 
      callBack: () => {control.putText('Hello world!')}
    }   
  ]

export const buttonsLeft: myButton[] = 
  [
    {
      side: 'L', 
      title: 'Number!', 
      callBack: () => {
        (!Number.isNaN(+control.getText())) && alert(control.getText())
      }
    },
    {
      side: 'R', 
      title: 'Alert', 
      callBack: () => {alert(control.getText())}
      } 
   ]
