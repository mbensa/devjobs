import React from "react";
import Text from "./Text";
import Button from "./Button";
import "./detailsCard.css";

export default function DeatilsCard(props) {
  const { postedAt, contract, position, location } = props;
  return (
    <div className="detailsContainer">
      <div className="detailsTitleContainer">
        <div className="detailsTitleText">
          <div className="detailsContract">
            <Text type="p">1 w ago</Text>
            <span className="detailsContractDot">&#8226;</span>
            <Text type="p">Part Time</Text>
          </div>
          <Text type="h3" className="detailsPosition">
            Software Engineer
          </Text>
          <Text type="h4" className="detailsLocation">
            United Kingdom
          </Text>
        </div>
        <div className="detailsButton">
          <Button btnText="Apply now" violet id="detailsButton"></Button>
        </div>
      </div>
      <div className="detailsDescriptionContainer">
        <div className="detailsDescription">
          <Text type="p">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec
            urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet
            viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.
            Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum
            hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
            euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus
            sed, urna.
          </Text>
        </div>
        <div className="detailsRequirements">
          <Text type="h3">Requirements</Text>
          <Text type="p">
            Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu
            pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius,
            adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus
            ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel,
            nisl.
          </Text>
          <ul>
            <li>
              <Text type="p">Morbi interdum mollis sapien. Sed</Text>
            </li>
            <li>
              <Text type="p">Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus</Text>
            </li>
            <li>
              <Text type="p">
                Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam
                pellentesque mauris ut lectus.
              </Text>
            </li>
            <li>
              <Text type="p">Morbi interdum mollis sapien. Sed</Text>
            </li>
          </ul>
        </div>
        <div className="detailsTasks">
          <Text type="h3">What you will do</Text>
          <Text type="p">
            Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi
            purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit
            tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu
            pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
          </Text>
          <ul>
            <li>
              <Text type="p">Morbi interdum mollis sapien. Sed</Text>
            </li>
            <li>
              <Text type="p">Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus</Text>
            </li>
            <li>
              <Text type="p">
                Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam
                pellentesque mauris ut lectus.
              </Text>
            </li>
            <li>
              <Text type="p">Morbi interdum mollis sapien. Sed</Text>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
