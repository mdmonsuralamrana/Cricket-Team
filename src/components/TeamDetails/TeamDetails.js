import React from 'react';
import './TeamDetails.css';
import FemaleImage from '../../Photo/female.png';
import MaleImage from '../../Photo/male.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faMarsStroke, faThumbtack } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';



const TeamDetails = (props) => {
    const { strLeague, dateFirstEvent, strCountry, strGender, strSport, strDescriptionEN, strBanner, strFacebook, strTwitter, strYoutube } = props.teamDetail;

    let detailImage;
    if (strGender === 'Male') {
        detailImage = MaleImage;
    }
    else {
        detailImage = FemaleImage;
    }
    return (
        <div className="detail-container">
            <div className="detail-banner">
                <img src={strBanner} alt="" />
            </div>
            <div className="detail-site">
                <div className="detail-box">
                    <div className="detail-info">
                        <h2>{strLeague}</h2>
                        <p><FontAwesomeIcon className="detail-icon" icon={faThumbtack} /> Founded: {dateFirstEvent}</p>
                        <p><FontAwesomeIcon className="detail-icon" icon={faFlag} /> Country: {strCountry}</p>
                        <p><FontAwesomeIcon className="detail-icon" icon={faFutbol} /> Sport Type: {strSport}</p>
                        <p><FontAwesomeIcon className="detail-icon" icon={faMarsStroke} /> Gender: {strGender}</p>
                    </div>
                    <div className="detail-img">
                        <img src={detailImage} alt="" />
                    </div>
                </div>
                <div className="detail-description">
                    <p>{strDescriptionEN}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptatum sequi minima! Accusantium voluptates beatae magni, officia nisi iure architecto itaque, soluta excepturi aspernatur mollitia voluptas! Illum, vero ex, recusandae molestiae aut hic quam quos corporis adipisci officia unde nemo saepe aliquid quidem dolore magni eius tempore ab ullam incidunt natus earum, numquam minima. Explicabo inventore aliquam repellendus nesciunt aliquid consequatur iusto quisquam porro quo! Fuga quo dolorem explicabo animi perspiciatis ea repellat magni! In nesciunt tempore, sunt consequuntur optio officiis earum incidunt temporibus voluptates ipsa facilis, ex, voluptate aut quas quae alias enim ducimus. Ratione assumenda quod itaque repudiandae ad deleniti asperiores laborum, totam labore vero, blanditiis neque ipsum cumque debitis veritatis? Suscipit vero repellat adipisci! Eaque tenetur illum officiis incidunt blanditiis dolorem vel provident, eius ipsam tempore nam aliquid libero cumque, saepe rem quae voluptatibus reiciendis quos sapiente? Laboriosam tenetur provident, veniam repellendus quod perspiciatis sunt ipsam fugit.</p>
                </div>
                <div className="social-icon">
                    <a target = "_blank" rel="noreferrer"  href={strFacebook}><FontAwesomeIcon icon={faFacebook} /></a>
                    <a target = "_blank" rel="noreferrer"  href={strTwitter}><FontAwesomeIcon icon={faTwitter} /></a>
                    <a target = "_blank" rel="noreferrer"  href={strYoutube}><FontAwesomeIcon icon={faYoutube} /></a>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;