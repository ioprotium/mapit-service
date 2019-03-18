require 'rails_helper'


RSpec.describe 'Markers API', type: :request do
  let(:api_url) { '/api/v1' }

  # test data
  let!(:markers) { create_list(:marker, 10) }

  # some random marker
  let(:marker_id) { markers.sample.id }

  describe 'GET /markers' do
    before { get "#{api_url}/markers" }

    it 'returns all markers' do
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end
  end

  describe 'GET /markers/:id' do
    before { get "#{api_url}/markers/#{marker_id}" }

    context 'when the record exists' do
      it 'returns the marker' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(marker_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:marker_id) { 15 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end
    end
  end

  describe 'POST /markers' do
    let(:valid_attributes) { { name: 'Berlin', latitude: 11.50, longitude: 12.00 } }

    context 'when the request is valid' do
      before { post "#{api_url}/markers", params: valid_attributes }

      it 'creates a marker' do
        expect(json['name']).to eq('Berlin')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before { post "#{api_url}/markers", params: { name: '' } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end
    end
  end

  # Test suite for PUT /todos/:id
  describe 'PUT /markers/:id' do
    let(:valid_attributes) { { name: 'Updated' } }

    context 'when the record exists' do
      before { put "#{api_url}/markers/#{marker_id}", params: valid_attributes }

      it 'updates the record' do
        expect(json['name']).to eq('Updated')
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end
  end

  describe 'DELETE /markers/:id' do
    before { delete "#{api_url}/markers/#{marker_id}" }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end