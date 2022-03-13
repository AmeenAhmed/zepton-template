import './style.css';
import logo from './zepton-logo.png';
import { createApp, render, $ } from 'zepton';


function Main() {
  const template = $('.zepton-template',
    $('img.logo', { src: logo }),
    $('h1', 'Welcome to your Zepton App'),
    $('div',
      $('a', 'Documentation', { href: 'https://www.zeptonjs.org/docs' })
    )
  );

  return render({ template });
}

createApp({
  root: '#app',
  component: Main
});
