/**
 * Silva MD Bot Script for Developer Jokes
 * Fetches a random developer joke from the API and sends it as a response.
 */

const axios = require('axios');

let handler = async (m, { conn }) => {
    try {
        // Fetch a random developer joke from the API
        const response = await axios.get('https://readme-jokes.vercel.app/api');
        const joke = response.data;

        // Send the joke as a response
        if (joke) {
            conn.sendMessage(m.chat, { text: joke }, { quoted: m });
        } else {
            conn.sendMessage(m.chat, { text: 'Sorry, I couldn\'t fetch a joke at the moment. Please try again later!' }, { quoted: m });
        }
    } catch (error) {
        console.error('Error fetching joke:', error);
        conn.sendMessage(m.chat, { text: 'Oops! Something went wrong while fetching a joke. Please try again later.' }, { quoted: m });
    }
};

handler.help = ['devjoke'];
handler.tags = ['fun'];
handler.command = ['devjoke'];

module.exports = handler;