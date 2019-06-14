const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json')


var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`[BOT] ${client.user.tag} bzzz neo neo!`);
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.channel.send('Pong!' + client.ping + 'ms');
  }
   if (message.content === 'sa') {
    message.reply('as');
  }
   if (message.content === 'lo') {
    message.reply('LO');
  }
  if (message.content === 'cahiller') {
    message.channel.send('https://cdn.discordapp.com/attachments/587622014265589771/589097171413106702/tenor.gif');
  }
  if (message.content === 'merhabalar') {
    message.channel.send('merhaba');
  }
  if (message.content === 'çay var mı?') {
    message.channel.send('https://cdn.discordapp.com/attachments/587622014265589771/589095480013881344/cay_yap_.gif');
  }	
  if (message.content === 'nbr') {
    message.reply('iyi senden nbr');
  }
  if (message.content === 'çok sıkıldım') {
    message.channel.send('bak buralar hep sıkıldı');
  }  
  if (message.content === 'reis') {
    message.channel.send('https://cdn.discordapp.com/attachments/587622014265589771/587655722267836447/Reis.jpg');
  }
  if (message.content === prefix + 'meavatar') {  
	message.channel.send(message.author.avatarURL);
   }
  if (message.content === 'reis2') {
    message.channel.send('https://cdn.discordapp.com/attachments/588753997989412866/588766545384308751/ulu-onder-recep-tayyip-erdogan_772977.jpg');
	}
  if (message.content === 'hadsizler') {
    message.channel.send('hadsiz kopaklar');
	}
  if (message.content === 'hadsiz') {
    message.channel.send('tüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüü');
	}
  if (message.content === 'ne yaptı ki') {
    message.channel.send('yol yaptı köprü yaptı daha ne yapacak hadsizzzzzz');
 }
  if (message.content === 'neobot') {
    message.channel.send('neo neo neo bzzz');
	}
  if (message.content === 'kimse yokmu burda') {
    message.channel.send('bi ben kaldım yapayanlız bi bot özsüzüüüüüüüüüüüüüüüüüüüüüüüüümmmmmmmmmmmmmmmmmm');
}
  if (message.content === 'hadsiz bot') {
    message.channel.send('acıyıııııınnn bannnnaaa https://www.youtube.com/watch?v=fLpJqhiYatI ');
 }
 if (message.content === 'ok') {
    message.reply('ok');
  }  
  if (message.content === 'boronon') {
    message.channel.send('biri bor mu dedi 2023 tesüper güç olacaz https://cdn.discordapp.com/attachments/587712860738682949/587721629988028469/boron.jpg');
  }  
   if (message.content === 'tab2') {
    message.channel.send('tabikiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
  }  
   if (message.content === 'kurallar') {
    message.channel.send('1.küfür edip insanların ıq sunu düşürme 2.spam yapma 3.insanların düşüncelerine hakaret etme 4.burda karamizah dahil herşey kabuldür takılın kafanıza göre');
  }  
  
  
  
     if (message.content === prefix + 'reboot') {
	  
	  if (message.author.id === "362236950842834945") {
		  message.channel.send('[BOT]Yenıden başlatılıyor...').then(msg => {
			  console.log('yeniden başlatılıyor')
			  process.exit(0);
		  });
	  } else 
		  message.channel.send('Maalesef bu komutu kullanamazsın. Benim yapımcım değilsin tamamı!')
}


});

client.login(process.env.BOT_TOKEN);

