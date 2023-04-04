import { dataFooter } from '@/data/dataFooter';

import Header from '@/components/headers/Header';
import Footer from '@/components/footers/Footer';

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      {children}
      <Footer menuList={dataFooter} />
    </div>
  )
}

export default Layout