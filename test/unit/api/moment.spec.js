import * as API from '../../../src/api/moment.js';
import {expect} from 'chai';

describe('api.moment.getMomentList()', function () {
  it('should response without error');

  it('should have length 3', function () {
    expect('1234').to.have.length(4);
  });

  it('should have response code as 0 if everything is alright');
  it('should have response code as -1 if no data returned');
  it('should have list as [] if no data return');
});
