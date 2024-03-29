export const Button = ({ text = 'Get Started' }) => (
  <a href='https://oauth.do/login'>
    <div type='button' className='rounded-md bg-blue-600 ml-2 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
      {text}
    </div>
  </a>
)