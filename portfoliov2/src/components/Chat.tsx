import { FunctionComponent, useState } from "react";
import image from "../YandhiHead.jpg";
import TypedList from "./TypedList";

interface Props {
    
}
 
const Chat: FunctionComponent<Props> = () => {
    //Client values
    const [value, setValue] = useState('');
    const [messages, setMessages] = useState<Array<any>>([]);

    const handleKeyPress= (event: any) => {
        if(event.key === 'Enter') {
          addClientChat(value);
          setValue('');
        }


    }

    const addClientChat = (content: string) => {
      setMessages(messages.concat(
        [<div className="flex justify-end mb-4">
                  <div
                    className="mr-2 py-3 px-4 bg-sky-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-gray-700"
                  >
                    {content}
                  </div>
                  <img
                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                    className="object-cover h-8 w-8 rounded-full"
                    alt=""
                  />
                </div>,
        ]
      ));
    }

    const addServerChat = (content: string) => {
     //TODO: Add Server Chat 
    }

    return (       
      <div className="container mx-auto shadow-lg rounded-lg">
          <div className="flex flex-row justify-center ">
            <div className="w-full px-5 flex flex-col justify-center">
              {/* Client Chat */}
              <div className="flex flex-col mt-5">

                {messages}

                {/* Server Chat (TODO: Change to dynamic layout) */}
                {messages.length !==0?
                <div className="flex justify-start mb-4">
                  <img
                    src={image}
                    className="object-cover h-8 w-8 rounded-full"
                    alt=""
                  />
                  <div
                    className="ml-2 py-3 px-4 bg-gray-700 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
                  >
                    <TypedList text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat \n at praesentium, aut ullam delectus odio error sit rem. Architecto \n nulla doloribus laborum illo rem enim dolor odio saepe, \n consequatur quas?"} 
                    interval={200} 
                    reTypeAllowed={false} />
                  </div>
                </div>
                :
                <p></p>
}

              <input
                  id="message"
                  className="w-full bg-gray-700 py-5 px-3 rounded-xl text-sky-400"
                  type="text"
                  value={value}
                  onKeyPress={(event) => {handleKeyPress(event)}}
                  onChange={event => {
                    setValue(event.target.value)
                  }}
                  placeholder="type your message here..."
                />


              </div>
            </div>
          </div>
        </div>
      );

}
 
export default Chat;
