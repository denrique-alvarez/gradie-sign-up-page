import "./styles.css";
import { HeaderTitle } from './header-title/HeaderTitle';
import { SubHeaderTitle } from './sub-header-title/SubHeaderTitle';

export const Header = () => {
  return (
    <header>
      <div class="login-form-container">
        <HeaderTitle />
        <SubHeaderTitle />
      </div>
    </header>
  );
};
