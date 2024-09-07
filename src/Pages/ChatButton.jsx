import React, { useState } from 'react';
import Chatbot from './Chatbot';
import { Fab, Tooltip } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion } from 'framer-motion';

const ChatButton = () => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('Hello, I need assistance with your services.');

    const handleToggle = () => {
        setOpen(!open);
    };

    const handleWhatsAppMessage = () => {
        const whatsappUrl = `https://wa.me/6379524135?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        setMessage(''); // Clear the input field after sending
    };

    return (
        <div>
            {/* Chat Icon on the right side */}
            <Fab 
                color="primary" 
                aria-label="chat"
                onClick={handleToggle}
                style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: 'green' }}
                title='Chat with us' arrow
            >
                <ChatIcon />
            </Fab>

            {/* WhatsApp Icon with pulse effect on the left side */}
            <Tooltip title="Contact us on WhatsApp" arrow>
                <motion.div
                    onClick={handleWhatsAppMessage}
                    style={{ 
                        position: 'fixed', 
                        bottom: '20px', 
                        left: '20px', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        width: '50px', 
                        height: '50px', 
                        backgroundColor: '#25D366', 
                        borderRadius: '50%', 
                        cursor: 'pointer'
                    }}
                    animate={{ 
                        scale: [1, 1.1, 1], 
                        boxShadow: [
                            '0px 0px 0px rgba(0,0,0,0)',
                            '0px 0px 20px rgba(37, 211, 102, 0.6)',
                            '0px 0px 0px rgba(0,0,0,0)',
                        ],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <WhatsAppIcon style={{ color: 'white', fontSize: '24px' }} />
                </motion.div>
            </Tooltip>

            {open && <Chatbot onClose={handleToggle} />}
        </div>
    );
};

export default ChatButton;
