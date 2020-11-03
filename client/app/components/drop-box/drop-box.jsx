import React from 'react';
import Text from '../text';
import { Row, Column } from '../grid';

import styles from './drop-box.scss';

const DropBox = () => (
  <div className={styles['drop-box']}>
    <Row direction="row">
      <Column>
        <Text
          text="Drag files here or"
          color="grey"
          size="small"
          bold="bold"
        />
      </Column>
      <Column>
        <Text
          text="browse"
          color="blue"
          size="small"
          bold="bold"
          margin="left"
          cursor="pointer"
        />
      </Column>

    </Row>
  </div>
);

export default DropBox;
