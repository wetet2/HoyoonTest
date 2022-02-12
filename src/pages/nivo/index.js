import * as React from "react"
import styled from 'styled-components'
import { ResponsiveTreeMapHtml } from '@nivo/treemap'
import { ResponsiveLine } from '@nivo/line'

import data from './data.json'
import data2 from './data2.json'
import './style.css'
data2.children.sort((a, b) => b.loc - a.loc)


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const WrapperInner = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  z-index: 222222;
`

const IndexPage = () => {
  return (
    <Container>
      <ResponsiveTreeMapHtml
        data={data2}
        identity="name"
        value="loc"
        valueFormat=".02s"
        orientLabel={false}
        label={(e) => {
          return (
            <WrapperInner style={{ width: e.width, height: e.height }}>
              <ResponsiveLine
                data={data}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  orient: 'bottom',
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'transportation',
                  legendOffset: 36,
                  legendPosition: 'middle'
                }}
                axisLeft={{
                  orient: 'left',
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'count',
                  legendOffset: -40,
                  legendPosition: 'middle'
                }}
                pointSize={2}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}

                useMesh={true}

                enableGridX={false}
                enableGridY={false}
                legends={[]}
              /></WrapperInner>
          )
        }}
        // isInteractive={false}
        labelSkipSize={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.2]] }}
        parentLabelTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        borderWidth={4}
        borderColor="#453a3a"
        colors={['transparent']}
        nodeOpacity={1}
        onMouseEnter={(d, e) => e.target.style.backgroundColor = 'black'}
        onMouseLeave={(d, e) => e.target.style.backgroundColor = ''}
      />
    </Container>
  )
}

export default IndexPage
