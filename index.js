const fs = require('fs')
const path = require('path')
const { Client } = require('tmi.js')
require('dotenv').config()

const channel = 'ayoitsjoevanbo'
const password = process.env.password
const me = '61614939'

const config = {
    options: { debug: true },
    connection: {
        secure: true,
        reconnect: true,
    },
    identity: {
        username: 'joevanbot',
        password: password
    },
    channels: [channel]
}

const client = new Client(config)

client.on('connected', (address, port) => {
    console.log('>>>Im in')
    client.say(channel, 'ay yo yo')
})
client.on('message', (channel, ctx, message, self) => {
    if(self) return
})

client.connect()

// example context object
const ctx = {
    'badge-info': null,
    badges: { broadcaster: '1' },
    color: '#DAA520',
    'display-name': 'ayoitsjoevanbo',
    emotes: null,
    flags: null,
    id: '3233340c-223f-4259-bd3d-0b05ceb3829e',
    mod: false,
    'room-id': '61614939',
    subscriber: false,
    'tmi-sent-ts': '1587895628148',
    turbo: false,
    'user-id': '61614939',
    'user-type': null,
    'emotes-raw': null,
    'badge-info-raw': null,
    'badges-raw': 'broadcaster/1',
    username: 'ayoitsjoevanbo',
    'message-type': 'chat'
  }