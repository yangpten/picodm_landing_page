import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Script from 'next/script'

export default function Home() {
  return (
    <div className='w-full'>
      <Head>
        <title>Pico DM</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

      <Script strategy="lazyOnload">
      {`!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
      },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
      a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
      // Insert Twitter Pixel ID and Standard Event data below
      twq('init','o913p');
      twq('track','PageView');`}
      </Script>
      <script
            dangerouslySetInnerHTML={{
              __html: `!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
              },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
              a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
              // Insert Twitter Pixel ID and Standard Event data below
              twq('init','o913p');
              twq('track','PageView');`,
            }}
          />
      </Head>
      <main className='py-24 lg:py-48 text-center'>
        <div className="mb-6 px-2">
          <img className='h-60 mx-auto' src="/twitter.png" alt="" />
          <h1 className="bg-clip-text text-transparent  bg-gradient-to-bl from-sky-400 to-blue-500 text-4xl lg:text-5xl font-black mb-2">
            Twitter Outreach Made Easy
          </h1>
          <p className="text-gray-400 text-xl lg:text-2xl font-medium">
            Pico helps you find new customers on Twitter, send them personalized messages, and grow
            your business.
          </p>
        </div>

        <a target='_blank' href='https://airtable.com/shryRlfrTkuZWsc4x' className="hover:opacity-80 shadow-md px-4 py-2 bg-gradient-to-bl from-sky-400 to-blue-500 text-white font-bold rounded-3xl">
          Get Early Access to Pico
        </a>
      </main>
      <div id="how-it-works" className='bg-gradient-to-bl from-sky-50 to-blue-200 w-full py-16 lg:rotate-6 lg:overflow-hidden	 rounded-3xl max-w-screen-xl mx-auto'>
        <h2 className='text-gray-700 text-3xl font-black mb-2 text-center lg:-rotate-6'>
          How does <span className='bg-clip-text text-transparent  bg-gradient-to-bl from-sky-400 to-blue-500'>Pico</span> work?
        </h2>
        <div className="flex flex-wrap max-w-screen-lg mx-auto lg:-rotate-6">
          <div className='lg:w-1/3 p-4 max-w-lg mx-auto'>
            <div className='how-it-works-step bg-white p-6 rounded-3xl shadow h-full'>
              <video width='320' height='240' controls className='mx-auto rounded-2xl border-2 my-3'>
                <source src="/twitter-add-to-list.webm" width="100%" height="100%" playsInline autoPlay loop muted type='video/webm'/>
                <source src="/twitter-add-to-list.mp4" width="100%" height="100%" playsInline autoPlay loop muted type='video/mp4'/>
              Your browser does not support the video tag.
              </video>
              <p className='font-bold mt-6 mb-2 text-xl'>
                1. Shortlist leads without leaving Twitter
              </p>
              <p className=''>
                Create your own Twitter lists or find a public list of your target audience. Pico can automatically import users from Twitter lists as leads.
              </p>
            </div>
          </div>
          <div className='lg:w-1/3 p-4 max-w-lg mx-auto'>
            <div className='how-it-works-step bg-white p-6 rounded-3xl shadow h-full'>
              <img src="/score.png" alt="" className='border-2 p-1 max-h-60 mx-auto rounded-3xl' />
              <p className='font-bold mt-6 mb-2 text-xl'>
              2. Pico tracks and scores your leads
              </p>
              <p className=''>
              Pico uses a proprietary algorithm to score each lead. Pico also tracks each lead 
              so you don't duplicate your outreach efforts.
              </p>
            </div>
          </div >
            <div className='lg:w-1/3 p-4 max-w-lg mx-auto'>
            <div className='how-it-works-step bg-white p-6 rounded-3xl shadow h-full'>
              <img src="/custom-messages.png" alt="" className='mx-auto max-h-60 rounded-3xl border-2 p-1' />
              <p className='font-bold mt-6 mb-2 text-xl'>
              3. Send custom messages at scale
              </p>
              <p className=''>
              Pico lets you automatically populate customized messages and reach out to your leads with a single click!
              </p>
            </div>
          </div>

        </div>
          </div>
      <div id="faq" className='py-24'>
        <h2 className='text-gray-700 text-3xl font-black mb-2 text-center'>
          FAQ
        </h2>
        <div className='max-w-screen-sm mx-auto text-center'>
          <details className='my-6'>
            <summary className='font-bold'>
              What's the difference between Pico and Twitter Ads?
            </summary>
            <p>
              Pico is based on direct outreach to a precisely targeted Twitter audience via Twitter DMs.
              Twitters Ads is the official way of advertising on Twitter, by specifiying a tweet and 
              The approach with sending targeted Twitter messages is relatively less utilized, which is why it's highly effective.
            </p>
          </details>

          <details className='my-6'>
            <summary className='font-bold'>

          Do I need a Twitter account to use Pico?
            </summary>
            <p>
          Yes, you will need a Twitter account in order to send DMs.
              
            </p>
          </details>

          <details className='my-6'>
            <summary className='font-bold'>

          How to write messages that convert?
            </summary>
            <p>
          Be a human. You cannot expect to sell through a single cold message 
          sent to someone you don’t know. You can sell by being a real person 
          and engaging in a real conversation with your leads. Pico just 
          streamlines the process of finding your potential leads on Twitter 
          and kickstarting the conversations. You handle the communication, 
          and convert your leads to customers through real conversations.

            </p>
          </details>
        </div>
      </div>
      <footer className='text-center py-6'>
        <hr/>
        <br />
        <p className="text-gray-500 text-sm font-medium">Created with 💙 in Sydney.</p>
      </footer>
    </div>
  );
}
