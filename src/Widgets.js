import React from 'react'
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    );
    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("World War 3 is on", "Top news - 40.5k readers")}
            {newsArticle("Coronavirus: India Update", "Top news - 80.5k readers")}
            {newsArticle("INDvsSL", "Top news - 4.5k readers")}
            {newsArticle("Ashes", "Top news - 8.5k readers")}
            {newsArticle("Google", "Top news - 25.5k readers")}
            {newsArticle("Elon Musk", "Top news - 45.5k readers")}
            {newsArticle("CryptoCurrency", "Top news - 55.5k readers")}
        </div>
    );
}

export default Widgets