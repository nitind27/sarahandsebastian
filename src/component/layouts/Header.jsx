
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
    return (
        <div className="bg-gray-900 text-white p-2 text-center">

            <span className="">
                <TypeAnimation
                    sequence={[
                        'Web Developer',
                        1000, // Waits 1 second
                        'UI/UX Designer',
                        1000,
                        'Software Engineer',
                        1000,
                        'Data Scientist',
                        1000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1em', display: 'inline-block' }}
                />
            </span>

        </div>
    );
}

export default Header;