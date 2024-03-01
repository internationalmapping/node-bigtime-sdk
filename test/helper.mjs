import * as chai from 'chai';
import sinon from 'sinon';
import chaiSinon from 'chai-spies';

chai.use(chaiSinon);
chai.config.includeStack = true;
global.expect = chai.expect;
global.sinon = sinon;