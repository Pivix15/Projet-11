import React from 'react';
import ArgentBank from '@/components/ArgentBank';

const EditUser = () => {
    return (
        <main>
            <section>
                <h1>Edit user info</h1>
                <form>
                    <div className='input-edituser'>
                        <label for="username">User name:</label>
                        <input type="text" id="username" placeholder='test' />
                    </div>
                    <div className='input-edituser'>
                        <label for="firstname">First name:</label>
                        <input type="text" id="firstname" placeholder='test' />
                    </div>
                    <div className='input-edituser'>
                        <label for="lastname">Last name:</label>
                        <input type="text" id="lastname" placeholder='test' />
                    </div>
                    <div className='edit-btn'>
                        <button>Save</button>
                        <button>Cancer</button>
                    </div>
                </form>
            </section>
            <ArgentBank />
            <ArgentBank />
            <ArgentBank />
        </main>
    );
};

export default EditUser;