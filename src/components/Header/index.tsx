import Link from "next/link";
import { useState } from "react";
import { MenuContainer } from "./styles";
import styles from "./styles.module.scss";

export function Header() {

  const [openMenu, setOpenMenu,] = useState(false);
  const handleOpen = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header>
      <div className={styles.header}>
        <img className={styles.logo} src="/images/logo.png" alt="Logo ivasko" />
        <span onClick={handleOpen}  >{openMenu !== true ? (<img className={styles.buttonMobile}  src="./icon/menu.png" alt="" />) : (<img className={styles.buttonMobile}  src="./images/menu.png" alt="" />
          )}
        </span>
        <div className={styles.menu}>
          <Link href={"/"}>Início</Link>
          <Link href={"/about"}>Quem Somos</Link>
          <Link href={"/stores"}>Lojas</Link>
          <Link href={"/books"}>Livro de Receitas</Link>
          <Link href={"/"}>Departamento</Link>
          <Link
            href="https://app.skeel.com.br/ivasko"
            target={"_blank"}
            rel="noreferrer"
          >
            Trabalhe Conosco
          </Link>
          <Link 
          href="https://meucartao.senff.com.br/ivasko/bem-vindo"
          target={"_blank"}
          rel="noreferrer"
          >CARTÃO IVASKO</Link>
        </div>
        <div className={styles.icon}>
          <div>
            <Link
              href="https://www.facebook.com/superivasko/"
              target={"_blank"}
              rel="noreferrer"
            >
              <img src="/assets/face.png" alt="Logo  facebook" />
            </Link>
          </div>

          <div>
            <Link
              href="https://www.instagram.com/superivasko/"
              target={"_blank"}
              rel="noreferrer"
            >
              <img src="/assets/insta.png" alt="Logo Instagram" />
            </Link>
          </div>

          <div>
            <Link
              href="https://br.linkedin.com/company/grupoivasko"
              target={"_blank"}
              rel="noreferrer"
            >
              <img src="/assets/linkedin.png" alt="Logo Linkdin" />
            </Link>
          </div>
        </div>
      </div>

      <MenuContainer className={openMenu !== true ? ' ' : 'open'}>
      <div className={styles.menuMobile}>
        <div className={styles.contentMenu}>
          <Link href={"/"}>Início</Link>
          <Link href={"/about"}>Quem Somos</Link>
          <Link href={"/stores"}>Lojas</Link>
          <Link href={"/books"}>Livro de Receitas</Link>
          <Link href="/">Delivery</Link>
          <Link
            href="https://app.skeel.com.br/ivasko"
            target={"_blank"}
            rel="noreferrer"
          >
            Trabalhe Conosco
          </Link>
          <Link
            href="https://meucartao.senff.com.br/ivasko/bem-vindo"
            target={"_blank"}
            rel="noreferrer"
          >
            CARTÃO IVASKO
          </Link>
        </div>
      </div>
    </MenuContainer>


    </header>
  );
}