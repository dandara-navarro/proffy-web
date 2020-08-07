import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

class PageHeader extends Component {
    render() {
        return (
            <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="Back" />
                    </Link>
                    <img src={logoImg} alt="Proffy" />
                </div>
                
                <div className="header-content">
                    <strong>{this.props.title}</strong>
                    {this.props.description && <p>{this.props.description}</p>}
                    
                    {this.props.children}
                </div>
            </header>
        )
    }
}

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string
}

export default PageHeader;